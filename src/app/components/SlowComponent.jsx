async function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

export async function SlowComponent() {
  await delay(5000);

  return (
    <div>
      <p className="text-red-400">
        I am very slow to load but I am here at last!
      </p>
    </div>
  );
}
