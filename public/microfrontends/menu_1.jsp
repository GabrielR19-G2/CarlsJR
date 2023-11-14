<%-- 
    Document   : menu.jsp
    Created on : 13 nov. 2023, 23:12:12
    Author     : hecto
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>

<div class="container-xxl py-5">
    <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 class="section-title ff-secondary text-center text-primary fw-normal">Menú de Platillos</h5>
            <h1 class="mb-5">Más Populares</h1>
        </div>
        <!-- Menu Start -->
                <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
                    <ul class="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                        <li class="nav-item">
                            <a class="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill"
                               href="#tab-1">
                                <i class="fa fa-coffee fa-2x text-primary"></i>
                                <div class="ps-3">
                                    <small class="text-body">Delicioso</small>
                                    <h6 class="mt-n1 mb-0">Café</h6>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill"
                               href="#tab-2">
                                <i class="fa fa-hamburger fa-2x text-primary"></i>
                                <div class="ps-3">
                                    <small class="text-body">Especialidad de</small>
                                    <h6 class="mt-n1 mb-0">Comidas</h6>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill"
                               href="#tab-3">
                                <i class="fa fa-utensils fa-2x text-primary"></i>
                                <div class="ps-3">
                                    <small class="text-body">Increibles</small>
                                    <h6 class="mt-n1 mb-0">Postres</h6>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div id="tab-1" class="tab-pane fade show p-0 active">
                            <div class="row g-4">

                            </div>
                        </div>

                        <div id="tab-2" class="tab-pane fade show p-0">
                            <div class="row g-4">
                                <div class="col-lg-6">
                                    <div class="d-flex align-items-center">
                                        <img class="flex-shrink-0 img-fluid rounded" src="img/ALAPARRILLA-FamousStarWithCheese-min_rptn24.webp" alt=""
                                             style="width: 80px;">
                                        <div class="w-100 d-flex flex-column text-start ps-4">
                                            <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                <span>Famous Star Burger</span>
                                                <span class="text-primary">$195</span>
                                            </h5>
                                            <small class="fst-italic">Doble carne de sirloin, doble tocineta, gratinado mozzarella,
                                                acompañada de papas gajos, ranch, BBQ y queso cheddar.
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="d-flex align-items-center">
                                        <img class="flex-shrink-0 img-fluid rounded" src="img/ALAPARRILLA-DoubleWesternBaconCheeseburger-min_l4q26i.webp" alt=""
                                             style="width: 80px;">
                                        <div class="w-100 d-flex flex-column text-start ps-4">
                                            <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                <span>Double Western Bacon</span>
                                                <span class="text-primary">$160</span>
                                            </h5>
                                            <small class="fst-italic">Rellena de boneless a elegir, gratinada, cubierta de aguacate,
                                                acompañada de papas a la francesa, ranch y catsup.
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="d-flex align-items-center">
                                        <img class="flex-shrink-0 img-fluid rounded" src="img/DESAYUNOS-BaconEggCheeseBreakfastBurrito-min_u606au.webp" alt=""
                                             style="width: 80px;">
                                        <div class="w-100 d-flex flex-column text-start ps-4">
                                            <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                <span>Bacon & Egg Burrito</span>
                                                <span class="text-primary">$170</span>
                                            </h5>
                                            <small class="fst-italic">1 pza. de sirloin, tocineta, gratinada,
                                                2 aros de cebolla, cubierta de aguacate, acompañada de papas a la francesa, ranch y catsup.
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="d-flex align-items-center">
                                        <img class="flex-shrink-0 img-fluid rounded" src="img/ALAPARRILLA-GuacamoleBaconThickburger-min_xuuosu.webp" alt=""
                                             style="width: 80px;">
                                        <div class="w-100 d-flex flex-column text-start ps-4">
                                            <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                <span>Guacamole Bacon Big Angus Burger®</span>
                                                <span class="text-primary">$175</span>
                                            </h5>
                                            <small class="fst-italic">Doble carne de sirloin bañada en queso cheddar, americano, acompañada 
                                                de papas a la francesa bañadas en tocino y queso cheddar, ranch y catsup.
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="d-flex align-items-center">
                                        <img class="flex-shrink-0 img-fluid rounded" src="img/ALAPARRILLA-JalapenoBurger-min_rnua29.webp" alt=""
                                             style="width: 80px;">
                                        <div class="w-100 d-flex flex-column text-start ps-4">
                                            <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                <span>Jalapeño Burger</span>
                                                <span class="text-primary">$180</span>
                                            </h5>
                                            <small class="fst-italic">Doble carne de sirloin, tocineta, gratinado mozzarella, acompañada de papas 
                                                en gajos, ranch y queso cheddar.
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="d-flex align-items-center">
                                        <img class="flex-shrink-0 img-fluid rounded" src="img/ALAPARRILLA-LowCarbSixDollarBurguer-min_lgz4e1.webp" alt=""
                                             style="width: 80px;">
                                        <div class="w-100 d-flex flex-column text-start ps-4">
                                            <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                <span>Low Carb Big Angus Burger®</span>
                                                <span class="text-primary">$160</span>
                                            </h5>
                                            <small class="fst-italic">Exquisita burguer con crujientes tenders de pollo, acompañada de papas gajos, 
                                                aguacate especial, ranch y BBQ.
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="d-flex align-items-center">
                                        <img class="flex-shrink-0 img-fluid rounded" src="img/ALAPARRILLA-SuperStarWithCheese-min_cdeb3i.webp" alt=""
                                             style="width: 80px;">
                                        <div class="w-100 d-flex flex-column text-start ps-4">
                                            <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                <span>Super Star® with Cheese</span>
                                                <span class="text-primary">$150</span>
                                            </h5>
                                            <small class="fst-italic">Cortes de pollo empanizados y guisados en tu salsa favorita, acompañados de papas 
                                                a la francesa, vegetales y ranch.
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="d-flex align-items-center">
                                        <img class="flex-shrink-0 img-fluid rounded" src="img/ALAPARRILLA-TeriyakiBurger-min_ufojfr.webp" alt=""
                                             style="width: 80px;">
                                        <div class="w-100 d-flex flex-column text-start ps-4">
                                            <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                <span>Teriyaki Burger™</span>
                                                <span class="text-primary">$180</span>
                                            </h5>
                                            <small class="fst-italic">Cama de verduras cubierta de bonelessa elegir o exquisito pollo a la plancha, acompañada 
                                                de crutones, ranch y aguacate.
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="d-flex align-items-center">
                                        <img class="flex-shrink-0 img-fluid rounded" src="img/ALAPARRILLA-TheBigCarl-min_u1vld1.webp" alt=""
                                             style="width: 80px;">
                                        <div class="w-100 d-flex flex-column text-start ps-4">
                                            <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                <span>The Big Carl™</span>
                                                <span class="text-primary">$165</span>
                                            </h5>
                                            <small class="fst-italic">Crujientes nachos bañados en caliente queso cheddar, por encima boneless a elegir, 
                                                acompañados de ranch y aguacate.
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="d-flex align-items-center">
                                        <img class="flex-shrink-0 img-fluid rounded" src="img/ALAPARRILLA-OriginalThickburger-min_zioair.webp" alt=""
                                             style="width: 80px;">
                                        <div class="w-100 d-flex flex-column text-start ps-4">
                                            <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                <span>The Original Big Angus Burger®</span>
                                                <span class="text-primary">$180</span>
                                            </h5>
                                            <small class="fst-italic">Quesadilla jumbo (queso mozzarella) rellena de boneless a elegir, acompañadas de 
                                                papas a la francesa, ranch y aguacate.
                                            </small>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div id="tab-3" class="tab-pane fade show p-0">
                            <div class="row g-4">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Menu End -->
    </div>
</div>
