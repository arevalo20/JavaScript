const app = new Vue({
  el: "#app",
  template: `
  <div>
    <div v-if="mostrar">
      <p>{{ mensaje }}</p>
      <p>{{ bienvenida }}</p>
      <img :src="imagen" alt="">
    </div>
    <button @click="actionMostrar()">Mostrar/Ocultar</button>
  </div>`,
  data: {
    mostrar: true,
    mensaje: "Hola a todos!",
    imagen: "https://sweetalert2.github.io/images/swal2-logo.png",
    bienvenida: "Bienvenido a la pagina web"
  },
  methods: {
    actionMostrar: function() {
      this.mostrar = !this.mostrar;
    }
  }
});

const ejempCursos = new Vue({
  el: ".ejempCursos",
  data: {
    cursos: [
      { name: "Fundamentos de React", url: "http://cursos.carlosazaustre.es/p/react-js" },
      { name: "Redux con React", url: "http://cursos.carlosazaustre.es/p/curso-profesional-de-redux-y-react" },
      { name: "React Native", url: "http://cursos.carlosazaustre.es/p/react-native" }
    ],
  }
});