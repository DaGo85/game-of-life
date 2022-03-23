function Button({ text }: any) {
  return (
    <button className="border-2 px-6 py-2 rounded-xl bg-red-300 text-xl hover:bg-red-400">
      {text}
    </button>
  );
}

export default Button;
