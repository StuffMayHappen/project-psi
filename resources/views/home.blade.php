@extends('layouts.app')

@section('title', 'Home - Projeto Final PSI')
    
@section('content')

    <div class="hero">

        <div class="hero-content">

            <h1>Bem-Vindos ao Projeto Final PSI</h1>

            <p>Vê todos os filmes e series que temos disponiveis para ti</p>
            
            <button class="btn btn-primary">
                Começa A Ver Agora 
            </button>
        </div>

    </div>

    <!-- Recentemente adicionados -->
    <section class="content-section container">
        <h2 class="section-title">Filmes Adicionados Recentemente</h2>
        <div class="row g-4" id="filmes_adicionados_recentemente"></div>
    </section>

    <!-- Series Populares -->
    <section class="content-section container">
        <h2 class="section-title">Séries Populares</h2>
        <div class="row g-4" id="series-populares"></div>
    </section>

@endsection
