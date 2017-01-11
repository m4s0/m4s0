<?php

namespace AppBundle\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class TagsController extends Controller
{
    public function tagsListAction()
    {
        return $this->render(
            'AppBundle:admin/tags:tags_list.html.twig',
            [
                'tags'  => null,
                'title' => 'Tags'
            ]
        );
    }
}
