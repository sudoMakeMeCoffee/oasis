import { CheckCircle, Star } from 'lucide-react';

const ChallengeCard = ({ title, difficulty, topic, score, successRate }) => {
  return (
    <div className="bg-white rounded-md border border-gray-200 p-6 flex justify-between items-center shadow-sm mb-4">
      <div>
        <h3 className="text-xl font-normal text-gray-900">Plus Minus</h3>
        <p className="text-xs text-slate-500 mt-1 font-light">
          <span className="text-green-600">Basic</span>,   Score: 10
        </p>
      </div>

      <div className="flex items-center space-x-4">
        <Star className="w-5 h-5 text-slate-400" fill="currentColor" />
        <button className="flex items-center space-x-2 px-5 py-2 rounded-md border border-gray-400 text-gray-900 font-medium hover:bg-gray-50 transition">
          <span>Solved</span>
          <CheckCircle className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ChallengeCard;
