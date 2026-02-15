import React from 'react';
import { Trash2, CheckCircle, XCircle, Star } from 'lucide-react';
import type { Movie } from '../Interfaces/Movie';

interface Props {
  movie: Movie;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

export const MovieItem: React.FC<Props> = ({ movie, onDelete, onToggle }) => {
  return (
    <div className={`
      relative group overflow-hidden rounded-xl border transition-all duration-300
      ${movie.isWatched 
        ? 'bg-slate-900/40 border-slate-800 grayscale-[0.5]' 
        : 'bg-slate-800 border-slate-700 hover:border-purple-500/50 shadow-lg hover:shadow-purple-500/20'}
    `}>
      <div className="p-5 flex flex-col h-full justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-slate-700 text-slate-300">
              {movie.category}
            </span>
            <div className="flex items-center gap-1 text-yellow-400">
              <Star size={14} fill="#facc15" />
              <span className="text-sm font-bold">{movie.rating}</span>
            </div>
          </div>
          
          <h3 className={`text-xl font-bold mb-1 ${movie.isWatched ? 'line-through text-slate-500' : 'text-white'}`}>
            {movie.title}
          </h3>
          <p className="text-sm text-slate-400">
            {movie.isWatched ? 'İzlendi' : 'İzlenecek Listesinde'}
          </p>
        </div>

        <div className="flex gap-3 mt-4 pt-4 border-t border-slate-700/50">
          
          <button
            onClick={() => onToggle(movie.id)}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium transition-colors
              ${movie.isWatched 
                ? 'bg-slate-700 hover:bg-slate-600 text-slate-300' 
                : 'bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400'}`}
          >
            {movie.isWatched ? <XCircle size={16} /> : <CheckCircle size={16} />}
            {movie.isWatched ? 'İzlenmedi Yap' : 'İzlendi Yap'}
          </button>

          <button
            onClick={() => onDelete(movie.id)}
            className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};