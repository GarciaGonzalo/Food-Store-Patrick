export const CreateElement = (props) => {
  let $newElement = document.createElement(props.tagName);
  if (props.attributes) {
    for (let attribute of props.attributes) {
      $newElement.setAttribute(attribute.prop, attribute.value);
    }
  }
  if (props.textContent) {
    $newElement.textContent = props.textContent;
  }
  if (props.children) {
    for (let child of props.children) {
      $newElement.append(child);
    }
  }

  return $newElement;
};
