import { CheckCircle, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ChallengeCard = ({ id, title, difficulty }) => {

    const navigate = useNavigate();

  return (
    <div className="bg-white rounded-md border border-gray-200 p-6 flex justify-between items-center shadow-sm mb-4 cursor-pointer hover:shadow-md" onClick={() => navigate(`/challenge/${id}`)} >
      <div>
        <h3 className="text-xl font-normal text-gray-900">{title}</h3>
        <p className="text-xs text-slate-500 mt-1 font-light">
          <span
            className={
              difficulty == "BASIC"
                ? "text-green-600"
                : difficulty == "INTERMEDIATE"
                ? "text-orange-400"
                : "text-red-500"
            }
          >
            {difficulty}
          </span>
        </p>
      </div>

      <div className="flex items-center space-x-4">
        <Star className="w-5 h-5 text-slate-400" fill="currentColor" />
        <button className="btn-secondary btn-md">
          <span>Solve Challenge</span>
          {/* <CheckCircle className="w-5 h-5" /> */}
        </button>
      </div>
    </div>
  );
};

export default ChallengeCard;
