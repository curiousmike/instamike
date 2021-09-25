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

export const diffDatesMinutes = (msDate) =>
 {
    let diff =(Date.now() - msDate) / 1000;
    diff /= 60;
    return Math.abs(Math.round(diff));
}

export const diffDatesHours = (msDate) => {
  let diff = (Date.now() - msDate) / 1000;
  diff /= 60 * 60;
  return Math.abs(Math.round(diff));
};

export const diffDatesDays = (msDate) =>
 {
    let diff =(Date.now() - msDate) / 1000;
    diff /= 60*60*24;
    return Math.abs(Math.round(diff));
}

export const getTimeToShow = (msDate) => {
    const dateDiffMin = diffDatesMinutes(msDate);
	const dateDiffHours = diffDatesHours(msDate);
	const dateDiffDays = diffDatesDays(msDate);
    if (dateDiffDays >= 1) return `${dateDiffDays} days ago`;
    if (dateDiffHours >= 1 && dateDiffHours < 24) return  `${dateDiffHours} hours ago`;
    
    return `${dateDiffMin} minutes ago`;
}