import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";

function App() {
  return (
    <Canvas
      camera={{
        fov: 100,
        near: 0.1,
        far: 200,
      }}
    >
      {/* <Perf /> */}
      <Scene />
    </Canvas>
  );
}

export default App;
