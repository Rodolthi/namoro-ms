const lerURI = (e) => {
  if (e.target.files) {
    const files = Array.from(e.target.files);

    return Promise.all(
      files.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.addEventListener("load", (ev) => {
            resolve({result: ev.target.result, files: e.target.files[0]});
          });
          reader.addEventListener("error", reject);
          reader.readAsDataURL(file);
        });
      })
    );
  }
};

export default lerURI;
