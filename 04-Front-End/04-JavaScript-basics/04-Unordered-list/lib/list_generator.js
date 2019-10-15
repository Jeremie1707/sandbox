const listItem = content => `<li class="list-group-item">${content}</li>`;
// TODO: return the proper <li> HTML tag with its content (as a string)

const unorderedList = (items) => {
  // TODO: return the proper <ul> markup (as a string)
  // return '<ul class="list-group">'
  const string = items.map(item => listItem(item)).join('');
  return `<ul class="list-group">${string}</ul>`;
};


console.log(unorderedList(['milk', 'butter', 'bread']));
// <ul class="list-group">
//   <li class="list-group-item">milk</li>
//   <li class="list-group-item">butter</li>
//   <li class="list-group-item">bread</li>
// </ul>

module.exports = { listItem, unorderedList }; // Do not remove.
