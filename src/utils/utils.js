export const formatDate = (msDate) => {
    var d = new Date(msDate);
    // const result = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}  ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    const newResult = d.toLocaleDateString("en-US", { // you can use undefined as first argument
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour:"numeric",
        minute:"numeric",
        second:"numeric",
      });
    //   console.log('newDate = ', newResult);
    return newResult;
}
