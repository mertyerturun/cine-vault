import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import type { Movie } from '../Interfaces/Movie';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  onAdd: (movie: Movie) => void;
}

export const AddMovieForm: React.FC<Props> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState<number>(5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !category) return;

    const newMovie: Movie = {
      id: uuidv4(),
      title,
      category,
      rating,
      isWatched: false,
    };

    onAdd(newMovie);
    setTitle('');
    setCategory('');
    setRating(5);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur-md p-6 rounded-2xl border border-slate-700 shadow-xl mb-8">
      <h2 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Yeni İçerik Ekle
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Film/Dizi Adı"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-3 rounded-lg bg-slate-900 border border-slate-700 focus:border-purple-500 focus:outline-none text-white w-full"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-3 rounded-lg bg-slate-900 border border-slate-700 focus:border-purple-500 focus:outline-none text-white w-full"
        >
          <option value="" disabled>Tür Seçiniz</option>
          <option value="Bilim Kurgu">Bilim Kurgu</option>
          <option value="Aksiyon">Aksiyon</option>
          <option value="Drama">Drama</option>
          <option value="Komedi">Komedi</option>
          <option value="Belgesel">Belgesel</option>
        </select>
        
        <div className="flex items-center gap-2 bg-slate-900 p-3 rounded-lg border border-slate-700">
          <span className="text-sm text-slate-400">Puan:</span>
          <input
            type="number"
            min="1"
            max="10"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="bg-transparent focus:outline-none text-white w-full"
          />
        </div>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105"
        >
          <PlusCircle size={20} />
          Ekle
        </button>
      </div>
    </form>
  );
};