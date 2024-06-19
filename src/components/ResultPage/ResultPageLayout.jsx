import PercentageTable from './PercentageTable';

function ResultPageLayout({ jobPositions, isLoading }) {
  return (
    <div>
      <PercentageTable jobPositions={jobPositions} isLoading={isLoading} />
    </div>
  );
}

export default ResultPageLayout;
