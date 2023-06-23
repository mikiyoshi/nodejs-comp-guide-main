const InputBookDesc = ({ register, errors }) => {
  return (
    <>
      <label className="sub-title" htmlFor="book-desc">
        本の概要
      </label>
      <textarea
        id="book-desc"
        // placeholder="本の概要"
        placeholder="Book Overview"
        {...register('description', {
          // required: "本の概要を入力してください。",
          required: 'Please enter a summary of the book.',
        })}
      />
      {errors.description && (
        <div className="error-msg">{errors.description.message}</div>
      )}
    </>
  );
};

export default InputBookDesc;
