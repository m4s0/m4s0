<?php

namespace AppBundle\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class HomeController extends Controller
{
    public function homeAction()
    {
        return $this->render(
            'AppBundle:admin/home:home.html.twig',
            [
                'title' => 'Home'
            ]
        );    }
}
