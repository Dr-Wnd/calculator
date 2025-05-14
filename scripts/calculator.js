const group = document.getElementById('group');
    const tax = document.getElementById('tax');
    const sum = document.querySelectorAll('.calc');
    const totalDisplay = document.getElementById('total');

    function calculateTotal() {
      let total = parseInt(group.value) + parseInt(tax.value);
      sum.forEach(calc => {
        if (calc.value) {
          total += parseInt(calc.value);
        }
      });
      totalDisplay.textContent = `₴${total}`;
    }

    group.addEventListener('change', calculateTotal);
    tax.addEventListener('change', calculateTotal);
    sum.forEach(addon => addon.addEventListener('change', calculateTotal));

    // початковий розрахунок
    calculateTotal();
    // Скинути
  document.getElementById("reset").addEventListener("click",()=>{  
    const output=document.querySelector("#total");
     output.textContent=" ";
  });