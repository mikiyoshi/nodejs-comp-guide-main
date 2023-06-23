const InputBookTitle = ({ register, errors }) => {
  return (
    <>
      <label className="sub-title" htmlFor="book-title">
        {/* 本のタイトル */}
        Book Title
      </label>
      <input
        type="text"
        id="book-title"
        // placeholder="タイトル"
        placeholder="Title"
        {...register('title', {
          // required: 'タイトルを入力してください。',
          required: 'Please enter a title.',
          // maxLength: { value: 10, message: `10文字以内で入力してください。` },
          maxLength: {
            value: 10,
            message: `Please enter up to 10 characters.`,
          },
        })}
      />
      {errors.title && <div className="error-msg">{errors.title.message}</div>}
    </>
  );
};

export default InputBookTitle;
