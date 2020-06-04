      <script>
      
         'use strict'; // Modo chato do JS

         let num;

         do {
            num = parseInt(prompt('Digite um número inteiro:'))
         } while(isNaN(num));

         alert(`${num} elevado ao quadrado é ${num ** 2}.`);
         
      </script>