import { useProgress } from '@react-three/drei';

export default function Loader() {
    const { progress } = useProgress();
    return (
      <div className="loader-container">
        <div className="loader-spinner" />
        <span className="loader-text">{Math.round(progress)}% loaded</span>
      </div>
    );
};