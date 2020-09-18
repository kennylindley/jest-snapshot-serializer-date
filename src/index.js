/**
 * Serializes the date object into a string
 *
 * @param {object} value The Date object to serialize
 * @returns {string} The serialized value
 */
function print(value) {
  const hours = value.getHours();
  console.log(hours);
  value.setUTCHours(hours);

  return `{{ DateObject [${value.toUTCString()}] }}`;
}

/**
 * Returns true if value is a value and an instance of Date
 *
 * @param {object} value The value to be serialized
 * @returns {boolean} True if the value is an instance of Date
 */
function test(value) {
  return Boolean(value && value instanceof Date);
}

module.exports = { print, test };
