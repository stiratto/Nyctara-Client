const Footer = () => {
  return (
    <div className="bg-[#212121] flex flex-col md:flex-row py-4">
      <div className="container flex flex-col h-full justify-between text-[#ecefdc] gap-8">
        <h2 className="text-4xl max-w-xl ">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
        </h2>
        <img
          src="https://nyctaraperfumes.s3.us-east-2.amazonaws.com/public/Logo_de_Nombre_con_Iniciales_para_Profesionales_Minimalista_Tipografico_Blanco_y_Negro.png"
          alt="Lumiere Texto"
          className="max-w-[10rem]"
        />
        <p className="font-display">2025 © Placeholder</p>
        <div className="">
          <h3 className="text-xl">Contacto</h3>
          <div className="flex gap-4 ">
            <a
              href="#"
              target="_blank"
              className="border-b"
            >
              Instagram
            </a>
            <a
              href="#"
              target="_blank"
              className="border-b"
            >
              Facebook
            </a>
            <a
              href="#"
              target="_blank"
              className="border-b"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
