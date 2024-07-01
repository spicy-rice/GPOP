import Header from '../components/Header/Header';

const ExamplePage: React.FC = () => {
    return (
        <div>
            <Header />
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ExamplePage;