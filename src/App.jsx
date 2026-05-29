function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-blue-600 text-[5rem] text-center font-bold">
        Git Mind
      </h1>
      <img
        src="/banner-1.jpg"
        alt="Git Mind banner"
        className="w-full max-w-2xl rounded-lg shadow-lg my-6"
      />
      <p className="text-[18px] text-gray-700 text-center max-w-xl leading-relaxed">
        Git Mind es una aplicación web construida con React y Tailwind CSS.
        Gestiona tus ideas de forma visual y colaborativa, combinando el poder
        del control de versiones con un lienzo infinito para organizar tus
        pensamientos.
      </p>
    </div>
  );
}

export default App;
