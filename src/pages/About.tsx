import Container from "@/components/ui/Container";

const About = () => {
  return (
    <Container>
      <div>
        <h1 className="text-bold text-4xl text-center p-10 bg-slate-100">
          About Us
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-4">
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0627/7169/1734/t/22/assets/aa-contact-page-img.png?v=20416449947480147881661349752"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-bold text-3xl">
            Your faithful partners for Goods
          </h1>
          <p className="p-2">
            Houzez allows you to design unlimited panels and real estate custom
            forms to capture leads and keep a record of all information.
          </p>
          <ul className="p-5">
            <li>Better security for customer's privacy and information.</li>
            <li>More products at lower prices.</li>
            <li>Connect customers with the power of eCommerce at all times.</li>
          </ul>
          <div className=" p-2">
            <button className="p-2 bg-slate-300 text-sm hover:bg-purple-50 ">
              get support
              <br />
              <span className="text-bold">+123-456-789-10</span>
            </button>
          </div>
        </div>
      </div>

      <div className="p-10 bg-slate-100">
        <div>
          <p className="text-bold text-3xl p-10 text-center ">Core Features</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 p-2 bg-purple-100">
          <div className=" bg-base-100 shadow-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300">
            <figure className="px-10 pt-10">
              <img
                src="https://www.excelestore.com.bd/public/assets/img/excel_estore_free_delivery.png?v=2"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className=" p-2 pt-5 text-left">
              <h2 className="card-title">Free Delivary</h2>
              <p>
                We offer a hassle-free shipping experience with no additional
                charges. Sit back and relax while we bring your orders to your
                doorstep, completely free of cost.
              </p>
            </div>
          </div>
          <div className=" bg-base-100 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300">
            <figure className="px-10 pt-10">
              <img
                src="https://www.onlygfx.com/wp-content/uploads/2020/05/high-quality-stamp-4.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="p-2  text-left">
              <h2 className="card-title">Quality Product</h2>
              <p>
                {" "}
                At our store, we prioritize excellence in every product we
                offer. From meticulous sourcing to rigorous quality control, we
                ensure that our customers receive nothing but the best.
              </p>
            </div>
          </div>
          <div className=" bg-base-100 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300">
            <figure className="px-10 pt-10">
              <img
                src="https://zeevector.com/wp-content/uploads/Cashback-Logo-PNG@zeevector.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="p-2  text-left">
              <h2 className="card-title">100% Cash Back</h2>
              <p>
                We believe in the value of your satisfaction, which is why we
                offer a 100% cash back guarantee on our products. If you're not
                completely satisfied with your purchase, we'll refund your
                entire purchase amount, no questions asked.{" "}
              </p>
            </div>
          </div>
          <div className=" bg-base-100 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300">
            <figure className="px-10 pt-10">
              <img
                src="https://www.pearson.com/content/dam/global/shared/brand/pictograms/1600x800-pictogram-lime-green-online-meeting.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="p-2  text-left">
              <h2 className="card-title">24/7 Support</h2>
              <p>
                Our dedicated support team is available round the clock to
                assist you with any queries or concerns you may have. Whether
                it's day or night, we're here to provide prompt and reliable
                support to ensure your satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>

     

      <h1 className="text-bold text-3xl p-20 text-center bg-slate-100">
        Clients Feedback
      </h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 p-5">
        <div>
          <a
            href="#"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg p-2"
              src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Emily Johnson
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                The toy shop offers a wide selection of toys for children of
                various ages. The store is well-organized, making it easy to
                navigate and find specific toys.{" "}
              </p>
            </div>
          </a>
        </div>
        <div>
          <a
            href="#"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg p-2"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1lbiUyMHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Ethan Davis
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                The staff is friendly and knowledgeable, providing helpful
                assistance and recommendations.
              </p>
            </div>
          </a>
        </div>
        <div>
          <a
            href="#"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg p-2"
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Benjamin Thompson
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                the toy shop provides a pleasant shopping experience and is a
                great place to find toys that bring joy and entertainment to
                children.
              </p>
            </div>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default About;
