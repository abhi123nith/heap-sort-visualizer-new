import { useAnimation } from '../hooks';
import '../styles/Sidebar.scss';
import CustomScrollbar from './CustomScrollbar';
import InputArray from './InputArray';

export default function Sidebar() {
  const {
    closeSideBarWindow,
    lockButtonInput,
    buttons,
    selectBuildMinHeap,
    selectBuildMaxHeap,
    selectBuildMinHeapAndSort,
    selectBuildMaxHeapAndSort
  } = useAnimation();

  const instructions = {
    i1: '1) Press [Enter] for next input.',
    i2: '2) Max number of values = 63.',
    i3: '3) Value range (-999 to +999).',
    i4: '4) Fill all the values in the array in order to select an operation.'
  };

  return (
    <div
      className="sidebar"
      style={{
        animation: (closeSideBarWindow
          ? 'sideBarSlideLeft 0.5s ease-in-out forwards'
          : 'sideBarSlideRight 0.5s ease-in-out forwards'
        )
      }}
    >
      <h1 className="main-head">HeapSortVisualizer</h1>

      <CustomScrollbar>
        <div className="sidebar-content">
          <div className="handle-array-input">
            <p className="p-head">Input Array:</p>
            <p className="p-info">{instructions.i1}</p>
            <p className="p-info">{instructions.i2}</p>
            <p className="p-info">{instructions.i3}</p>
            <p className="p-info">{instructions.i4}</p>
            <InputArray />
          </div>

          <div
            className="handle-buttons-input"
            style={{
              pointerEvents: (lockButtonInput ? 'none' : 'auto')
            }}
          >
            <p className="p-head">Heap Operations:</p>

            <button
              className="hbi-btn"
              onClick={selectBuildMinHeap}
              style={{
                backgroundColor: (buttons.buildMinHeap
                  ? 'goldenrod'
                  : (lockButtonInput ? 'gray' : '')
                )
              }}
            >
              <p>Build Min Heap</p>
            </button>

            <button
              className="hbi-btn"
              onClick={selectBuildMaxHeap}
              style={{
                backgroundColor: (buttons.buildMaxHeap
                  ? 'goldenrod'
                  : (lockButtonInput ? 'gray' : '')
                )
              }}
            >
              <p>Build Max Heap</p>
            </button>

            <button
              className="hbi-btn"
              onClick={selectBuildMinHeapAndSort}
              style={{
                backgroundColor: (buttons.buildMinHeapAndSort
                  ? 'goldenrod'
                  : (lockButtonInput ? 'gray' : '')
                )
              }}
            >
              <p>Build Min Heap And Sort</p>
            </button>

            <button
              className="hbi-btn"
              onClick={selectBuildMaxHeapAndSort}
              style={{
                backgroundColor: (buttons.buildMaxHeapAndSort
                  ? 'goldenrod'
                  : (lockButtonInput ? 'gray' : '')
                )
              }}
            >
              <p>Build Max Heap And Sort</p>
            </button>
          </div>

          {/* Moved the developers section to the end */}
          <div className="author-details">
            <p className="p-head">Developers: </p>
            <div className="developer-names">
              <div className="developer-name">• ABHISHEK GODARA (22BCS007)</div>
              <div className="developer-name">• AJAY BAIRWA (22BCS011)</div>
            </div>
          </div>
        </div>
      </CustomScrollbar>
    </div>
  );
}