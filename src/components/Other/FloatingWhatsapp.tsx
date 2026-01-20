export const FloatingWhatsapp = () => {
  const img = "https://nyctaraperfumes.s3.us-east-2.amazonaws.com/public/whatsapp.png"
  return (
    <a
      target="_blank"
      href="https://wa.link/olrl2e"
      className="fixed right-2 bottom-8 animate-bounce z-50! "
    >
      <img
        src={img}
        alt="Whatsapp icon"
        className="w-[50px] h-[50px]"
      />
    </a>
  );
};
