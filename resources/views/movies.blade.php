@extends('layouts.app')

@section('title', 'Movies - Projeto Final PSI')
    
@section('content')

    <div class="container mt-4">
        
        <h1 class="mb-4">Filmes</h1>
        
        <!-- Genre Filters -->
        <div class="mb-4">
            <button class="genre-filter active" data-genre="all">Todos</button>
            <button class="genre-filter" data-genre="action">Ação</button>
            <button class="genre-filter" data-genre="drama">Drama</button>
            <button class="genre-filter" data-genre="comedy">Comédia</button>
            <button class="genre-filter" data-genre="sci-fi">Sci-Fi</button>
            <button class="genre-filter" data-genre="horror">Horror</button>
        </div>

        <!-- Movie Grid -->
        <div class="row g-4" id="movies-grid">
            <!-- Movies will be dynamically populated here -->
        </div>
        
    </div>

    <!-- Movie Details Modal -->
    <div class="modal fade movies-details-modal" id="moviesModal" tabindex="-1">

        <div class="modal-dialog modal-lg">

            <div class="modal-content">

                <div class="modal-header">
                    <h5 class="modal-title"></h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body">
                    <!-- Movie details will be populated here -->
                </div>

                <div class="modal-footer">

                    <button type="button" class="btn btn-project_psi">
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
