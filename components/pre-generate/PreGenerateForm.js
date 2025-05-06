import { useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function PreGenerateForm({ onGenerate, isLoading }) {
  const [count, setCount] = useState(5);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (count > 0 && count <= 100) {
      onGenerate(count);
    }
  };
  
  return (
    <div className="card">
      <h2 className="text-xl font-bold mb-4">Generate Short URLs</h2>
      
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col flex-1">
          <label htmlFor="url-count" className="text-sm font-medium text-foreground mb-1">
            Number of URLs to generate (1-100)
          </label>
          <input
            id="url-count"
            type="number"
            min="1"
            max="50"
            value={count}
            onChange={(e) => setCount(parseInt(e.target.value, 10) || 1)}
            className="input-field"
            required
          />
        </div>
        
        <button 
          type="submit" 
          className="btn-primary self-end md:self-end h-10 px-6"
          disabled={isLoading || count <= 0 || count > 100}
        >
          {isLoading ? (
            <>
              <Loader2 size={16} className="mr-2 animate-spin" />
              Generating...
            </>
          ) : 'Generate URLs'}
        </button>
      </form>
      
      {count > 20 && (
        <p className="mt-2 text-sm text-warning">
          Generating a large number of URLs may take a moment.
        </p>
      )}
    </div>
  );
} 