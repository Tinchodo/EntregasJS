let edad = Swal.fire({
    title: 'Cuantos años tienes?',
    icon: 'question',
    input: 'range',
    inputLabel: 'Ingresa tu edad',
    allowOutsideClick: false,
    allowEscapeKey: false,
    stopKeyDownPropagation: false,
    inputAttributes: {
      min: 5,
      max: 120,
      step: 1
      
    },
    inputValue: 25,
    inputValidator: edad => {
        if (edad < 18) {
            Swal.fire("Lo siento, eres menor")
            alert ("Lo siento, eres menor");
            document.body.classList.add ("block");
            btnSwitch.classList.add("active");
        } else {
            Swal.fire("Bienvenido!");
        }
    }
  })

