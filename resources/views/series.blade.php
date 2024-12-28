@extends('layouts.app')

@section('title', 'Series - Projeto Final PSI')
    
@section('content')

    <div class="container mt-4">

        <h1 class="mb-4">Series</h1>
        
        <!-- Genre Filters -->
        <div class="mb-4">
            <button class="genre-filter active" data-genre="all">Todos</button>
            <button class="genre-filter" data-genre="drama">Drama</button>
            <button class="genre-filter" data-genre="comedy">Comédia</button>
            <button class="genre-filter" data-genre="thriller">Thriller</button>
            <button class="genre-filter" data-genre="fantasy">Fantasia</button>
            <button class="genre-filter" data-genre="crime">Crime</button>
        </div>

        <!-- Series Grid -->
        <div class="row g-4" id="series-grid">
            <!-- Series will be dynamically populated here -->
        </div>

    </div>

    <!-- Series Details Modal -->
    <div class="modal fade series-details-modal" id="seriesModal" tabindex="-1">

        <div class="modal-dialog modal-xl">

            <div class="modal-content">

                <div class="modal-header">
                    <h5 class="modal-title"></h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body">
                    <!-- Series details will be populated here -->
                </div>

                <div class="modal-footer">

                    <button type="button" class="btn btn-streamflix">
                        <i class="fas fa-play me-2"></i>Ver Agora
                    </button>

                    <button type="button" class="btn btn-outline-light">
                        <i class="fas fa-plus me-2"></i>Adicionar a minha Lista
                    </button>

                </div>

            </div>

        </div>

    </div>

@endsection
