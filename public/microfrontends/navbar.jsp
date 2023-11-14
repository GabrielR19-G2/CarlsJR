<%-- 
    Document   : navbar.jsp
    Created on : 13 nov. 2023, 23:56:36
    Author     : hecto
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
   <div class="container-xxl position-relative p-0">
<nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
               <!-- Navbar & Hero Start -->
                    <a class="navbar-item" href="/">
                        <img src="https://carlsjrmx.netlify.app/assets/logo.svg" width="152" height="45" alt="Ir a página principal" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="fa fa-bars"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav ms-auto py-0 pe-4">
                            <a href="index.jsp" class="nav-item nav-link active">Inicio</a>
                            <a href="about.jsp" class="nav-item nav-link">Nosotros</a>
                            <a href="service.jsp" class="nav-item nav-link">Servicios</a>
                            <a href="menu.jsp" class="nav-item nav-link">Menú</a>
                            <a href="contact.jsp" class="nav-item nav-link">Contáctanos</a>
                        </div>
                        <a href="login.jsp" class="btn btn-primary py-2 px-4">Iniciar Sesión</a>
                    </div>
                </nav>

                <div class="container-xxl py-5 bg-dark hero-header mb-5">
                    <div class="container my-5 py-5">
                        <div class="row align-items-center g-5">
                            <div class="col-lg-6 text-center text-lg-start">
                                <h1 class="display-3 text-white animated slideInLeft">Disfrute de nuestra<br>deliciosa
                                    comida</h1><br>
                                <p class="text-white animated slideInLeft mb-4 pb-2">¡Bienvenido a Carls Jr, el
                                    paraíso de los amantes de la comida! ¿Te gusta la comida crujiente, sabrosa y con sabor
                                    a gloria? Si la respuesta es sí, entonces has venido al lugar correcto. </p>
                            </div>
                            <div class="col-lg-6 text-center text-lg-end overflow-hidden">
                                <img class="img-fluid" src="img/carls-jr-logo-2443A114F7-seeklogo.com.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Navbar & Hero End -->
</nav>

