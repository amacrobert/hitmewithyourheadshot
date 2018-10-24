<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\{Request, Response};

class WebController extends Controller {
    /**
     * @Route("/", name="app")
     */
    public function app() {
        return $this->render('index.html.twig', []);
    }
}
