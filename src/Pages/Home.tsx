import React, { useState, useEffect } from 'react';
import type { Movie } from '../Interfaces/Movie';
import { AddMovieForm } from '../Components/AddMovieForm';
import { MovieItem } from '../Components/MovieItem';
import { Film } from 'lucide-react';

export const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([
    { id: '1', title: 'Inception', category: 'Bilim Kurgu', rating: 9, isWatched: true },
    { id: '2', title: 'The Grand Budapest Hotel', category: 'Komedi', rating: 8, isWatched: false },
  ]);

  const handleAddMovie = (newMovie: Movie) => {
    setMovies([...movies, newMovie]);
  };
  const handleDeleteMovie = (id: string) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };
  const handleToggleWatched = (id: string) => {
    setMovies(movies.map(movie => 
      movie.id === id ? { ...movie, isWatched: !movie.isWatched } : movie
    ));
  };

  return (
    <div className="min-h-screen p-6 md:p-12 max-w-7xl mx-auto">

      <header className="mb-10 text-center">
        <div className="inline-flex items-center justify-center p-4 rounded-full bg-purple-500/10 mb-4 ring-1 ring-purple-500/30">
          <Film className="w-8 h-8 text-purple-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-2">
          CineVault
        </h1>
        <p className="text-slate-400">Favori yapımlarını modern bir arayüzde yönet.</p>
      </header>

      <AddMovieForm onAdd={handleAddMovie} />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-slate-800 p-4 rounded-xl border-l-4 border-purple-500">
          <p className="text-slate-400 text-xs uppercase tracking-wider">Toplam</p>
          <p className="text-2xl font-bold">{movies.length}</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-xl border-l-4 border-emerald-500">
          <p className="text-slate-400 text-xs uppercase tracking-wider">İzlenen</p>
          <p className="text-2xl font-bold">{movies.filter(m => m.isWatched).length}</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-xl border-l-4 border-blue-500">
          <p className="text-slate-400 text-xs uppercase tracking-wider">İzlenecek</p>
          <p className="text-2xl font-bold">{movies.filter(m => !m.isWatched).length}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.length > 0 ? (
          movies.map(movie => (
            <MovieItem 
              key={movie.id} 
              movie={movie} 
              onDelete={handleDeleteMovie}
              onToggle={handleToggleWatched}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-slate-500">
            Listeniz boş. Yukarıdan yeni bir içerik ekleyin.
          </div>
        )}
      </div>
    </div>
  );
};