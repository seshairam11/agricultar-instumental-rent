
const TextArea = ({ row = 5, cols = 40, value, setValue }) => {

    return (
        <div>
            <textarea
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Enter your text here..."
                rows={row}
                cols={cols}
                className="border rounded-md p-2 w-full"
            />
        </div>
    );
};

export default TextArea;
