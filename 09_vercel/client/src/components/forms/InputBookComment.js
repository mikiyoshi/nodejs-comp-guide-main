const InputBookComment = ({ register, errors }) => {
  return (
    <>
      <label className="sub-title" htmlFor="book-comment">
        Book Reviews
      </label>
      <textarea
        id="book-comment"
        // placeholder="本の感想"
        placeholder="Book Reviews"
        // {...register("comment", { required: "本の感想を入力してください。" })}
        {...register('comment', {
          required: 'Please enter your impressions of the book.',
        })}
      />
      {errors.comment && (
        <div className="error-msg">{errors.comment.message}</div>
      )}
    </>
  );
};

export default InputBookComment;
