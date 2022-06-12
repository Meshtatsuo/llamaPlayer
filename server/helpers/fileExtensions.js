function getFileExtension(dir) {
  return dir.slice((Math.max(0, dir.lastIndexOf(".")) || Infinity) + 1);
}

module.exports = {
  getFileExtension,
};
