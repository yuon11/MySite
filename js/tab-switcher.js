export function initTabSwitcher(tabsSelector, itemSelector, activeClass = 'active') {
  const tabButtons = document.querySelectorAll(`${tabsSelector} button`);
  const contentItems = document.querySelectorAll(itemSelector);

  function switchTo(targetId) {
    // Hide all content items
    contentItems.forEach(item => item.classList.remove(activeClass));

    // Deactivate all buttons
    tabButtons.forEach(button => button.classList.remove('active-tab'));

    // Show the target item
    const targetItem = document.getElementById(targetId);
    if (targetItem) {
      targetItem.classList.add(activeClass);
    }

    // Activate the corresponding tab button
    const activeButton = [...tabButtons].find(btn => btn.getAttribute('data-target') === targetId);
    if (activeButton) {
      activeButton.classList.add('active-tab');
    }
  }

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      switchTo(targetId);
    });
  });

  // Activate the first by default
  if (contentItems.length > 0 && tabButtons.length > 0) {
    const firstId = tabButtons[0].getAttribute('data-target');
    switchTo(firstId);
  }
}
