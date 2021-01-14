function Validator(options) {

   var selectorRules = {};

   function validate(inputElement, rule) {
      var erroElement = inputElement.parentElement.querySelector(options.errorSelector);
      var errorMessage;
      var rules = selectorRules[rule.selector];
      for (var i = 0; i < rules.length; ++i) {
         errorMessage = rules[i](inputElement.value);
         if (errorMessage) break;
      }

      if (errorMessage) {
         erroElement.innerText = errorMessage;
         inputElement.parentElement.classList.add('invalid');
      } else {
         erroElement.innerText = '';
         inputElement.parentElement.classList.remove('invalid');
      }
   }


   var formElement = document.querySelector(options.form);
   if (formElement) {
      options.rules.forEach(function (rule) {

         if (Array.isArray(selectorRules[rule.selector])) {
            selectorRules[rule.selector].push(rule.test);
         } else {
            selectorRules[rule.selector] = [rule.test];
         }

         var inputElement = formElement.querySelector(rule.selector);

         if (inputElement) {

            inputElement.onblur = function () {
               validate(inputElement, rule);
            }


            inputElement.oninput = function () {
               var erroElement = inputElement.parentElement.querySelector(options.errorSelector);
               erroElement.innerText = '';
               inputElement.parentElement.classList.remove('invalid');
            }
         }
      })
   }
}

Validator.isRequired = function (selector) {
   return {
      selector: selector,
      test: function (value) {
         return value.trim() ? undefined : 'Vui lòng nhập trường này!';
      }
   };
}
Validator.isEmail = function (selector) {
   return {
      selector: selector,
      test: function (value) {
         var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
         return regex.test(value) ? undefined : 'Email không hợp lệ!';
      }
   };
}
Validator.isNumber = function (selector) {
   return {
      selector: selector,
      test: function (value) {
         return isNaN(value) ? "Vui lòng chỉ nhập số!" : undefined;
      }
   };
}
