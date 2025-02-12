import useCreateDay from "@/hooks/apis/day/mutation/useCreateDay";
import useDeleteDay from "@/hooks/apis/day/mutation/useDeleteDay";
import useUpdateDay from "@/hooks/apis/day/mutation/useUpdateDay";
import useLog from "@/hooks/apis/log/query/useLog";

const Day = () => {
  const query = useLog(2);

  const createDay = useCreateDay();
  const deleteDay = useDeleteDay();
  const updateDay = useUpdateDay();

  // console.log(query.data);

  const handleCreate = () => {
    const { data } = query;

    if (!data) {
      return;
    }
  };

  const handleUpdate = (dayId: number, dayIndex: number) => {
    updateDay(dayId, { index: dayIndex + 1 });
  };

  return (
    <>
      <button onClick={handleCreate}>만들기2</button>
      {query.isSuccess && (
        <div>
          {query.data.id}
          <br />

          {/* {query.data.data.days.map((day: any, index) => (
            <div key={index}>
              day-{day.dayIndex + 1}
              <button onClick={() => handleUpdate(day.id, day.dayIndex)}>
                업데이트
              </button>
              <button onClick={() => deleteDay(day.id)}>삭제</button>
              <br />
              {day.pins.map((pin: any) => (
                <div key={pin.id}>
                  {pin.id} {pin.lat} {pin.lng}
                </div>
              ))}
              <br />
              {day.index}
              <br />
              {day.id}
              <br />
            </div>
          ))} */}
        </div>
      )}
    </>
  );
};

export default Day;
