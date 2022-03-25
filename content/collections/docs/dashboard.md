---
id: d926e826-7ef3-418a-b4e2-31aaa2c07560
blueprint: page
title: Dashboard
intro: 'The dashboard is a user-customizable screen. One of Shopper''s main goals is to enable stores to easily customize the modules.'
template: page
---
## Overview

When you log into the control panel, you will be taken to the dashboard — a customizable screen dispatch with a Livewire component!

Laravel Shopper is a free open-source e-commerce application based on the [TALL Stack](https://tallstack.dev) and aims to build an e-commerce administration using only [Livewire](https://laravel-livewire.com) components.

The navigation at the left contains the available panels for everyday use:

<div class="screenshot">
    <img src="/img/dashboard.png" alt="Shopper Global Set Example">
    <div class="caption">The dashboard and the Getting Started panel</div>
</div>

Clicking on each icon will open the panel or shows a list of available panels.

## Components

The component that displays the dashboard is quite simple, so you can easily replace it to put your own.

The component used is `Shopper\Framework\Http\Livewire\Dashboard` and can also be found in the components file `config/shopper/components.php`.

```php
namespace Shopper\Framework\Http\Livewire;

use Livewire\Component;

class Dashboard extends Component
{
    public function render()
    {
        return view('shopper::livewire.dashboard');
    }
}
```

## Layout

Shopper comes with a [Tailwind CSS](https://tailwindcss.com) based design and you can [extend](/extending/control-panel) the default layout for your components.

``` blade
@extends('shopper::layouts.default')
@section('title', __('My page title'))

@section('content')

    {{-- Your content here --}}

@endsection

```

All pages that will be on the administration must have this content and extend the default layout of Shopper