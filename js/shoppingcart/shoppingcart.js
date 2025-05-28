
        function updateCartTotals() {

            let subtotal = 0;
            document.querySelectorAll('.cart-total').forEach(function (cell) {
                const value = parseFloat(cell.textContent.replace(/[^0-9.]/g, ''));
                subtotal += value;
            });
            document.querySelectorAll('.cart-totals-value')[0].textContent = '£' + subtotal.toFixed(2);

            const shipping = 15;
            document.querySelectorAll('.cart-totals-value')[1].textContent = '£' + (subtotal + shipping).toFixed(2);
        }

        document.querySelectorAll('.cart-qty-group').forEach(function (group) {
            const minusBtn = group.querySelector('.qty-btn-minus');
            const plusBtn = group.querySelector('.qty-btn-plus');
            const qtyValue = group.querySelector('.cart-qty-value');
            const row = group.closest('tr');
            const priceCell = row.querySelector('.cart-price');
            const totalCell = row.querySelector('.cart-total');

            if (!minusBtn || !plusBtn || !qtyValue || !priceCell || !totalCell) return;

            function updateTotal() {
                const price = parseFloat(priceCell.textContent.replace(/[^0-9.]/g, ''));
                const qty = parseInt(qtyValue.textContent, 10);
                const total = price * qty;
                totalCell.textContent = '£' + total.toFixed(2);
                updateCartTotals();
            }

            minusBtn.addEventListener('click', function () {
                let qty = parseInt(qtyValue.textContent, 10);
                if (qty > 1) {
                    qty--;
                    qtyValue.textContent = qty;
                    updateTotal();
                }
            });

            plusBtn.addEventListener('click', function () {
                let qty = parseInt(qtyValue.textContent, 10);
                qty++;
                qtyValue.textContent = qty;
                updateTotal();
            });
        });

        document.querySelector('.cart-btn-update').addEventListener('click', function () {
            updateCartTotals();
            alert('Cart updated!');
        });

        document.querySelector('.cart-btn-clear').addEventListener('click', function () {
            document.querySelectorAll('tbody tr').forEach(function (row) {
                row.remove();
            });
            updateCartTotals();
        });

        document.querySelector('.cart-btn-checkout').addEventListener('click', function () {
            alert('Redirecting to checkout...');
            // window.location.href = '/checkout.html';
        });

        document.querySelector('.cart-btn-calc').addEventListener('click', function () {
            alert('Shipping calculated! (Demo)');
        });

  