const lerURI = (e) => {
  const files = Array.from(e.target?.files);

  e.target?.files &&
    Promise.all(
      files?.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.addEventListener("load", (ev) => {
            resolve(ev.target.result);
          });
          reader.addEventListener("error", reject);
          reader.readAsDataURL(file);
        });
      })
    );
};

export default lerURI;
