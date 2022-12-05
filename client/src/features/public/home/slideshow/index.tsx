import clsx from 'clsx';

function Slideshow() {
  return (
    <section className={clsx('slideshow', 'relative')}>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <section className="h-[50vh]">
        <img
          src="https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/F5461D_LOL.jpeg?v=1648846897"
          alt="slideshow image"
          className="block h-full w-full object-cover object-center"
        />
      </section>
      <section className="absolute top-[40%] left-[10%] translate-y-[-40%]">
        <h2 className="max-w-[60%] font-sourceSerifPro text-[6rem]">
          Send <em className="text-red-2">flowers</em> like you mean it.
        </h2>
        <p className="mt-20 max-w-[50%] text-16 leading-normal text-[#555]">
          Where flowers are our inspiration to create lasting memories. Whatever the occasion, our flowers will make it
          special cursus a sit amet mauris.
        </p>
      </section>
    </section>
  );
}

export { Slideshow };
