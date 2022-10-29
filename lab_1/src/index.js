const changeState = (elements, propertyName, caller) => {
  if (!caller.className.includes(propertyName)) {
    for (let element of elements) {
      element.className = element.className.replace(propertyName, '').trim();
    }

    caller.className = caller.className + ' ' + propertyName;
  }
};

let billingOptions = document.getElementsByClassName('prices__billing-option');
for (let option of billingOptions) {
  option.addEventListener('click', () =>
    changeState(billingOptions, 'prices__billing-option--selected', option)
  );
}

const cards = document.getElementsByClassName('prices__billing-card');
for (let card of cards) {
  card.addEventListener('click', () =>
    changeState(cards, 'prices__billing-card--prior', card)
  );
}

const menu = document.getElementsByClassName('nav__block__menu')[0];
const mobileNavBar = document.getElementsByClassName('nav--mobile')[0];

menu.addEventListener('click', () => {
  if (mobileNavBar.className.includes('nav--open')) {
    mobileNavBar.className = mobileNavBar.className
      .replace('nav--open', '')
      .trim();
  } else {
    mobileNavBar.className = mobileNavBar.className + ' nav--open';
  }
});
