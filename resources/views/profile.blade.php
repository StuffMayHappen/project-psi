@extends('layouts.app')

@section('title', 'Profile - Projeto Final PSI')
    
@section('content')

    <div class="container mt-4">

        <div class="profile-header">

            <div class="row align-items-center">

                <div class="col-md-2 text-center">

                    <div class="profile-avatar">
                        <i class="fas fa-user"></i>
                    </div>

                </div>
                
                <div class="col-md-10">
                    <h1 class="mb-2">Rodrigo Lima</h1>
                    <p class="text-muted mb-2">Membro desde setembro de 2024</p>
                    <button class="btn btn-project-psi">Editar o perfil</button>
                    <button class="btn btn-outline-light ms-2">Trocar palavra-chave</button>
                </div>

            </div>

        </div>
        
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
        <div class="row">
            <!-- Watch History -->
            <div class="col-md-8">

                <div class="content-card">

                    <h2 class="h4 mb-4">Continue Watching</h2>

                    <div class="watch-history-item">

                        <img src="../../public/img/stranger_things_season_1.jpg" alt="Stranger Things thumbnail" class="thumbnail">
                        
                        <div class="flex-grow-1">

                            <h3 class="h6 mb-1">Stranger Things</h3>
                            
                            <p class="small text-muted mb-1">S2:E5 - "Dig Dug"</p>

                            <div class="progress">
                                <div class="progress-bar" style="width: 75%"></div>
                            </div>

                        </div>

                        <button class="btn btn-project-psi btn-sm ms-3">
                            Resume
                        </button>

                    </div>
                    <!-- More watch history items -->
                </div>
                
                <div class="content-card">

                    <h2 class="h4 mb-4">Watch History</h2>

                    <div class="watch-history-item">

                        <img src="../../public/img/breaking_bad_season_1.jpg" alt="Breaking Bad thumbnail" class="thumbnail">
                        
                        <div class="flex-grow-1">
                            <h3 class="h6 mb-1">Breaking Bad</h3>
                            <p class="small text-muted">Completed • Last watched 2 days ago</p>
                        </div>

                        <button class="btn btn-outline-light btn-sm ms-3">
                            Watch Again
                        </button>

                    </div>
                    <!-- More history items -->
                </div>

            </div>

            <!-- Preferences -->
            <div class="col-md-4">

                <div class="content-card">

                    <h2 class="h4 mb-4">Preferences</h2>

                    <div class="mb-3 preference-switch">

                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="autoplayNext" checked>
                            <label class="form-check-label" for="autoplayNext">Autoplay next episode</label>
                        </div>

                    </div>

                    <div class="mb-3 preference-switch">

                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="autoplayPreview" checked>
                            <label class="form-check-label" for="autoplayPreview">Autoplay previews</label>
                        </div>

                    </div>

                    <div class="mb-3">

                        <label class="form-label">Preferred Language</label>

                        <select class="form-select season-selector">
                            <option>English</option>
                            <option>Spanish</option>
                            <option>French</option>
                        </select>

                    </div>
                    
                </div>

                <div class="content-card">
                    <h2 class="h4 mb-4">My List</h2>
                    <p class="text-muted">12 titles</p>
                    <button class="btn btn-outline-light w-100">View My List</button>
                </div>

            </div>

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
                        <i class="fas fa-play me-2"></i>Watch Now
                    </button>

                    <button type="button" class="btn btn-outline-light">
                        <i class="fas fa-plus me-2"></i>Add to Watchlist
                    </button>

                </div>

            </div>

        </div>

    </div>

@endsection
