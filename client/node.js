import jsonServer from 'json-server';
import queryString from 'query-string';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.get('/echo', (req, res) => {
  res.jsonp(req.query);
});

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now();
    req.body.updatedAt = Date.now();
  } else if (req.method === 'PATCH') {
    req.body.updatedAt = Date.now();
  }
  next();
});

router.render = (req, res) => {
  const headers = res.getHeaders();
  console.log('headers', headers);

  const totalCountHeader = headers['x-total-count'];
  if (req.method === 'GET' && totalCountHeader) {
    const queryParams = queryString.parse(req._parsedOriginalUrl.query);

    const _page = Number(queryParams._page) || 1;
    const _limit = Number(queryParams._limit) || 12;
    const _totalRows = Number(totalCountHeader);
    const _totalPages = Math.ceil(_totalRows / _limit);

    const result = {
      data: res.locals.data,
      pagination: {
        _page,
        _limit,
        _totalPages,
        _totalRows,
      },
    };

    return res.jsonp(result);
  }

  res.jsonp(res.locals.data);
};

// Use default router
server.use('/api', router);
server.listen(9000, () => {
  console.log('JSON Server is running');
});
