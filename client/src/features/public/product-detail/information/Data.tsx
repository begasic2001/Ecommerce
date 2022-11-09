import styles from './information.module.scss';

const s = {
  content: styles.content,
  title: styles['content__title'],
  subTitle: styles['content__sub-title'],
  table: styles.table,
  txt: styles['content__txt'],
  list: styles['content-list'],
};

export const DataInfo = () => (
  <>
    <section className={s.content}>
      <h3 className={s.title}>Thông tin chi tiết sản phẩm</h3>
      <table className={s.table}>
        <tbody>
          <tr>
            <th>Danh mục</th>
            <td>Hoa</td>
          </tr>
          <tr>
            <th>Kiểu đóng gói</th>
            <td>Đơn giản</td>
          </tr>
          <tr>
            <th>Xuất xứ</th>
            <td>Việt Nam</td>
          </tr>
          <tr>
            <th>Kho hàng</th>
            <td>300</td>
          </tr>
          <tr>
            <th>Gửi từ</th>
            <td>Hồ Chí Minh</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section className={s.content}>
      <h3 className={s.title}>Mô tả sản phẩm</h3>
      <p className={s.txt}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat earum fugit sit maiores
        pariatur. Quibusdam odio mollitia blanditiis corporis? Id unde hic ipsam excepturi veritatis
        quas quo repudiandae nam explicabo. Animi atque nobis accusantium dignissimos vel sit,
        reiciendis dolorem consequuntur nisi ut nulla ex voluptatibus exercitationem quasi ducimus
        corporis labore dolore quibusdam ratione delectus ab perspiciatis. Repudiandae sed est
        repellat.
      </p>
      <p className={s.txt}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab facilis suscipit ipsa non nulla
        rerum labore consequuntur sequi in corrupti eius, quaerat quae sunt maiores soluta eaque
        cumque laudantium excepturi? Corrupti esse excepturi, quae est facilis iure modi similique
        accusantium. Debitis perspiciatis ratione laborum porro eius eos magni unde adipisci nemo!
        Assumenda incidunt labore sed ab consectetur hic debitis officia? Quisquam dolores quam hic
        nihil delectus veritatis, in dolorum debitis id obcaecati sint praesentium tempore unde
        dicta! Reprehenderit quisquam, ab, eveniet ad, sit quibusdam sapiente consequatur placeat
        molestias sunt enim?
      </p>
    </section>
  </>
);

export const DataGuide = () => (
  <section className={s.content}>
    <h4 className={s.subTitle}>Một số lưu ý để giữ hoa tươi lâu hơn:</h4>
    <ul className={s.list}>
      <li>Luôn giữ ẩm cho miếng xốp (có thể tưới nước 1 lần/ngày).</li>
      <li>
        Khi tưới nước, chỉ nên rưới theo chiều dài của thân để nước chảy xuống, không vương ra
        ngoài.
      </li>
      <li>
        Không tưới/phun nước vào nụ hay cánh hoa vì như thế sẽ tạo điều kiện cho nấm phát triển.
      </li>
      <li>
        Không đặt hoa gần quạt máy, nơi có nhiều gió, ánh nắng mặt trời, nơi phát ra nguồn nhiệt hay
        các loại quả chín.
      </li>
    </ul>
  </section>
);

export const DataTransport = () => (
  <section className={s.content}>
    <p className={s.txt}>
      Hoa là một trong những món quà tặng không thể thiếu trong mỗi dịp đặc biệt. Dù là những bữa
      tiệc nhỏ hay đến những bữa tiệc sang trọng thì những bông hoa luôn góp phần làm tăng lên sự
      sang trọng của bữa tiệc đó. Khi đến với Điện hoa Toàn Quốc và Quốc Tế 123Flower bạn sẽ được
      phục vụ một cách chuyên nghiệp. Chúng tôi sẽ giúp bạn gửi lời chúc mừng hay chia buồn chân
      thành nhất đến với người thân của bạn bằng những bó hoa, lẵng hoa đẹp nhất.
    </p>
    <h4 className={s.subTitle}>1. Đặt hàng tại trang web https://123flower.vn</h4>
    <p className={s.txt}>
      Bước 1: Bạn truy cập vào website. Trên web chúng tôi đưa ra những mẫu để cho khách hàng lựa
      chọn. Tùy theo nhu cầu của bạn mua hoa để làm gì? Bạn lựa chọn những sản phẩm phù hợp theo
      từng mục đích mà chúng tôi đã phân loại.
    </p>
    <p className={s.txt}>
      Bước 2: Click và sản phẩm mà bạn muốn mua. Sau đó Click vào nút "Đặt mua".
    </p>
    <p className={s.txt}>- Khi đó bạn sẽ thấy màn hình hiển thị ra pop up với các lựa chọn sau</p>
    <p className={s.txt}>
      Nếu bạn muốn tiếp tục mua thêm hàng: Bấm vào phần "Tiếp tục mua hàng" để tiếp tục lựa chọn
      thêm các sản phẩm khác phù hợp. Những sản phẩm bạn chọn mua sẽ được đưa vào giỏ hàng.
    </p>
    <p className={s.txt}>
      Sau khi bạn đã chọn xong các sản phẩm cần mua. Bạn muốn xem những sản phẩm mà bạn đã lựa chọn.
      Bạn bấm vào biểu tượng giỏ hàng để xem trong giỏ hàng của bạn đang chứa những sản phẩm gì.
      Kiểm tra xem sản phẩm trong giỏ hàng đã đủ và phù hợp với nhu cầu của bạn chưa. Nếu thiếu thì
      bạn tiếp tục chọn thêm sản phẩm. Còn thừa thì bạn có thể hủy bỏ sản phẩm đó.
    </p>
    <p className={s.txt}>
      Sau khi đã chọn xong sản phẩm mà bạn cần. Thì bạn tiến hành đặt hàng và thanh toán cho sản
      phẩm: Bạn vui lòng bấm vào “Tiến hành thanh toán”
    </p>
    <p className={s.txt}>Bước 3: Hoàn tất đơn hàng</p>
    <p className={s.txt}>
      Điền đầy đủ các thông tin của Bạn theo form mẫu để xác nhận đơn hàng mà bạn đã đặt.
    </p>
    <p className={s.txt}>
      Bạn kiểm tra và xem lại một lần nữa các thông tin cho đơn hàng đã đúng và đủ chưa. Ghi phần
      chú thích nếu có yêu cầu nào đặc biệt cho đơn hàng của bạn.
    </p>
    <p className={s.txt}>
      Sau khi hoàn tất, Quý khách nhấn nút "Đặt hàng" để hoàn tất việc đặt hàng của Quý Khách.
    </p>
    <p className={s.txt}>Bước 4: Thanh toán đơn hàng</p>
    <h4 className={s.subTitle}>2. Đặt hàng qua Zalo Official</h4>
    <p className={s.txt}>
      Nếu như khách hàng không tiện lên web xem hay đang có việc gì bận thì quý khách có thể liên hệ
      với bên Quốc Tế 123Flower qua zalo. Qúy khách sẽ được các bên CSKH tư vấn những mẫu phù hợp
      với nhu cầu của khách hàng.
    </p>
    <p className={s.txt}>
      – Qúy khách nhắn tin vào Zalo Official của 123 Flower sẽ có nhân viên CSKH chủ động liên hệ để
      tư vấn và hướng dẫn Qúy Khách chọn mẫu hoa ưng ý nhất.
    </p>
    <p className={s.txt}>
      – Qúy khách hãy miêu tả chi tiết sản phẩm mà mình muốn chọn như: màu sắc , loại hoa , xuất sứ,
      giấy gói, số lượng, giá thành của bó hoa hoặc món quà bạn định đặt.
    </p>
    <h4 className={s.subTitle}>3. Đặt hàng qua tổng đài 1800-1234 ( Miễn Phí)</h4>
    <p className={s.txt}>
      Bạn muốn tư vấn trực tiếp có thể gọi đến hotline 1800 1234. Bạn hãy miêu tả chi tiết như: màu
      sắc, loại hoa hoặc quà, xuất sứ, giấy gói, số lượng, giá thành của bó hoa hoặc món quà bạn
      định đặt sẽ được nhân viên CSKH tư vấn và hướng dẫn Quý Khách chọn mẫu ưng phù hợp với mục
      đích của bạn.
    </p>
    <h4 className={s.subTitle}>4 . Phí Vận Chuyển</h4>
    <p className={s.txt}>– Miễn Phí Vận Chuyển trong nội thành.</p>
    <p className={s.txt}>
      – Trong trường hợp nếu có tính phí vận chuyển phát sinh do kích thước sản phẩm lớn, giá trị
      sản phẩm cao. Thì 123Flower sẽ chủ động liên hệ và thông báo trước cho quý Khách Hàng về việc
      tính thêm chi phí vận chuyển sản phẩm.
    </p>
    <h4 className={s.subTitle}>5. Xác nhận đơn hàng</h4>
    <p className={s.txt}>
      Đơn hàng của bạn sẽ được 123Flower thực hiện nhanh nhất. Thời gian 2 giờ đối với các đơn hàng
      trong nước và 48 giờ đối với các đơn hàng quốc tế. Sau khi hai bên đã thống nhất về nội dung
      và hoàn tất thủ tục thanh toán cho 123Flower. Chúng tôi sẽ gửi thư điện tử hoặc gọi điện theo
      số điện thoại mà khách hàng điền trên from đặt hàng để xác nhận lại thong tin trước khi chuyển
      hàng.
    </p>
    <p className={s.txt}>Cảm ơn quý khách đã tin tưởng và sử dụng dịch vụ của 123Flower.</p>
  </section>
);
