<%@page contentType="text/html" pageEncoding="UTF-8"%>


<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Carls Jr</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport">
        <meta content="" name="keywords">
        <meta content="" name="description">
        <link rel="icon" href="https://carlsjrmx.netlify.app/assets/favicons/cropped-favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="https://carlsjrmx.netlify.app/assets/favicons/cropped-favicon-192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="https://carlsjrmx.netlify.app/assets/favicons/cropped-favicon-180x180.png" />
        <meta name="msapplication-TileImage" content="https://carlsjrmx.netlify.app/assets/favicons/cropped-favicon-270x270.png" />
        <meta name="description" content="Hamburgesas grandes y jugosas" />


        <!-- Favicon -->
        <link rel="icon" type="image/jpg" href="img/descarga.png"/>

        <!-- Google Web Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link
            href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&family=Pacifico&display=swap"
            rel="stylesheet">

        <!-- Icon Font Stylesheet -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

        <!-- Libraries Stylesheet -->
        <link href="lib/animate/animate.min.css" rel="stylesheet">
        <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
        <link href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />

        <!-- Customized Bootstrap Stylesheet -->
        <link href="css/bootstrap.min.css" rel="stylesheet">

        <!-- Template Stylesheet -->
        <link href="css/style.css" rel="stylesheet">
    </head>

    <body>
        <div class="container-xxl bg-white p-0">
            <!-- Spinner Start -->
            <div id="spinner"
                 class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                    <span class="sr-only">Cargando...</span>
                </div>
            </div>
            <!-- Spinner End -->


            <!-- Navbar & Hero Start -->
            <%@ include file="navbar.jsp" %>
            <!-- Navbar & Hero End -->


            <!-- Service Start -->
            <main>
                <section class="section home no-padding-bottom">
                    <div class="container">
                        <div class="online-order-cta">
                            <a href="/ordenar" class="centered-image">
                                <img width="1140" height="200" src="https://carlsjrmx.netlify.app/assets/ordena-y-recoge-banner-2.jpg" alt="Ordena y Recoge" />
                            </a>

                        </div>
                        <div class="container-xxl py-5">
                            <div class="container">
                                <div class="row g-4">
                                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                                        <div class="service-item rounded pt-3">
                                            <div class="p-4">
                                                <i class="fa fa-3x fa-user-tie text-primary mb-4"></i>
                                                <h5>Cocineros de calidad</h5>
                                                <p>Chefs con +10 años de experiencia</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                                        <div class="service-item rounded pt-3">
                                            <div class="p-4">
                                                <i class="fa fa-3x fa-utensils text-primary mb-4"></i>
                                                <h5>Comida de Calidad</h5>
                                                <p>Alimentos frescos y bien preparados</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                                        <div class="service-item rounded pt-3">
                                            <div class="p-4">
                                                <i class="fa fa-3x fa-cart-plus text-primary mb-4"></i>
                                                <h5>Ordena Online</h5>
                                                <p>Servicio de pedidos por internet</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                                        <div class="service-item rounded pt-3">
                                            <div class="p-4">
                                                <i class="fa fa-3x fa-headset text-primary mb-4"></i>
                                                <h5>Excelente Atención al Cliente</h5>
                                                <p>Trato amable y servicial al cliente</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Service End -->


                        <!-- About Start -->
                        <div class="container-xxl py-5">
                            <div class="container">
                                <div class="row g-5 align-items-center">
                                    <div class="col-lg-6">
                                        <div class="row g-3">
                                            <div class="col-6 text-start">
                                                <img id="img-muestra" class="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s"
                                                     src="img/car_large.jpg">
                                            </div>
                                            <div class="col-6 text-start"><br>
                                                <img width="300" height="180" src="https://res.cloudinary.com/amecar/image/fetch/w_1140,f_auto/https://res.cloudinary.com/amecar/image/upload/f_auto/v1696866444/CarlsJr-Aquaman2ComboClassic-WebsiteSlide-1140x474_xlgkqd.jpg"
                                                     alt="Aquaman CB109" />
                                            </div>
                                            <div class="col-6 text-end">
                                                <img width="300" height="200" src="https://res.cloudinary.com/amecar/image/fetch/w_1140,f_auto/https://res.cloudinary.com/amecar/image/fetch/f_auto/f_wdp/v1694785795/https://res.cloudinary.com/amecar/image/upload/f_wdp/v1692985667/CarlsJr-SteakhouseBurger-WebsiteSlide-1140x474_axypqu.jpg"
                                                     alt="SteakHouseBurger" />
                                            </div>
                                            <div class="col-6 text-end">
                                                <img id="img-muestra" class="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s"
                                                     src="img/Carls_Jr_Rancho_Cordova.jpg">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <h5 class="section-title ff-secondary text-start text-primary fw-normal">Nosotros</h5>
                                        <h1 class="mb-4">Bienvenido a Carls Jr</h1>
                                        <p class="mb-4">El restaurante perfecto para los amantes de la comida sabrosa y contundente.
                                            Aquí encontrarás una variedad de deliciosos platillos, desde nuestro famosas hamburguesas hasta 
                                            pasando por nuestras irresistibles alitas y papas fritas
                                            crujientes.</p>
                                        <p class="mb-4">Además, podrás disfrutar de un buen café y nuestros dedos de queso derretido,
                                            que son la perfecta combinación para compartir con tus amigos y familiares. </p>
                                        <div class="row g-4 mb-4">
                                            <div class="col-sm-6">
                                                <div class="d-flex align-items-center border-start border-5 border-primary px-3">
                                                    <h1 class="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">80
                                                    </h1>
                                                    <div class="ps-4">
                                                        <p class="mb-0">Años de</p>
                                                        <h6 class="text-uppercase mb-0">Experiencia</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="d-flex align-items-center border-start border-5 border-primary px-3">
                                                    <h1 class="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">30
                                                    </h1>
                                                    <div class="ps-4">
                                                        <p class="mb-0">Platillos</p>
                                                        <h6 class="text-uppercase mb-0">Inigualables</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <a class="btn btn-primary py-3 px-5 mt-2" href="">Leer mas</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- About End -->

                        <!-- Menú Start -->
                        <div class="menu-container">
                            <%@include file="menu_1.jsp" %>
                        </div>
                        <!-- Fin de Menú -->

                        
                </section>
            </main>
            <!-- Testimonial Start -->
            <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div class="container">
                    <div class="text-center">
                        <h5 class="section-title ff-secondary text-center text-primary fw-normal">Testimonios</h5>
                        <h1 class="mb-5">¡Nuestros Clientes Dicen!</h1>
                    </div>
                    <div class="owl-carousel testimonial-carousel">
                        <div class="testimonial-item bg-transparent border rounded p-4">
                            <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
                            <p>Las nuggets son lo máximo, sabor y cantidad perfecta.
                            </p>
                            <div class="d-flex align-items-center">
                                <img class="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-1.jpg"
                                     style="width: 50px; height: 50px;">
                                <div class="ps-3">
                                    <h5 class="mb-1">Rosa</h5>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-item bg-transparent border rounded p-4">
                            <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
                            <p>Las hamburguesas son jugosas y el pan es suave, definitivamente volveré.
                            </p>
                            <div class="d-flex align-items-center">
                                <img class="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-2.jpg"
                                     style="width: 50px; height: 50px;">
                                <div class="ps-3">
                                    <h5 class="mb-1">Emiliano</h5>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-item bg-transparent border rounded p-4">
                            <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
                            <p>Los Bacon&Eggs son una delicia y el café es el acompañante ideal.
                            </p>
                            <div class="d-flex align-items-center">
                                <img class="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-3.jpg"
                                     style="width: 50px; height: 50px;">
                                <div class="ps-3">
                                    <h5 class="mb-1">Fernando</h5>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-item bg-transparent border rounded p-4">
                            <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
                            <p>Las papas son una locura, súper crujientes y sabrosas, me encantaron.</p>
                            <div class="d-flex align-items-center">
                                <img class="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-4.jpg"
                                     style="width: 50px; height: 50px;">
                                <div class="ps-3">
                                    <h5 class="mb-1">Susana</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Testimonial End -->


            <!-- Footer Start -->
            <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
                <div id="container-footer" class="container py-5">
                    <div class="row g-5">
                        <div class="col-lg-3 col-md-6">
                            <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4">¿Quiénes somos?</h4>
                            <a class="btn btn-link" href="about.jsp">Nosotros</a>
                            <a class="btn btn-link" href="contact.jsp">Contáctanos</a>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4">Contáctanos</h4>
                            <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Plaza Sendero - C. 300 85180, Franja
                                Comercial 300, 85065 Cd Obregón, Son.</p>
                            <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+52 644 200 0000</p>
                            <p class="mb-2"><i class="fa fa-envelope me-3"></i>CarlsJr@hotmail.com </p>
                            <div class="d-flex pt-2">
                                <a class="btn btn-outline-light btn-social" href="https://www.instagram.com/carlsjrmex/" target="_blank"><i class="fab fa-instagram"></i></a>
                                <a class="btn btn-outline-light btn-social" href="https://www.facebook.com/CarlsJrMex" target="_blank"><i class="fab fa-facebook-f"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4">Horarios</h4>
                            <h5 class="text-light fw-normal">Lunes - Domingo</h5>
                            <p>10AM - 10PM</p>
                        </div>  
                        <div class="col-lg-3 col-md-6">
                            <h2><img id="logo-footer" src="img/descarga.png" alt="lgo"></h2>
                        </div>                    
                    </div>
                </div>
                <div class="container">
                    <div class="copyright">
                        <div class="row">
                            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a class="border-bottom" href="https://www.facebook.com/CarlsJrMex" target="_blank">CarlsJr</a>, Todos los derechos reservados.
                            </div>
                            <div class="col-md-6 text-center text-md-end">
                                <div class="footer-menu">
                                    <a href="index.jsp">Inicio</a>
                                    <a href="contact.jsp">Ayuda</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Footer End -->


            <!-- Back to Top -->
            <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
        </div>

        <!-- JavaScript Libraries -->
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="lib/wow/wow.min.js"></script>
        <script src="lib/easing/easing.min.js"></script>
        <script src="lib/waypoints/waypoints.min.js"></script>
        <script src="lib/counterup/counterup.min.js"></script>
        <script src="lib/owlcarousel/owl.carousel.min.js"></script>
        <script src="lib/tempusdominus/js/moment.min.js"></script>
        <script src="lib/tempusdominus/js/moment-timezone.min.js"></script>
        <script src="lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>

        <!-- Template Javascript -->
        <script src="js/main.js"></script>
    </body>

</html>