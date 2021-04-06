import { Component } from 'react';
import image from '../assets/error.jpeg';

class ErrorBoundary extends Component {
  state = { hasError: false };

  componentDidCatch(error, info) {
    // Если метод был вызван значит есть ошибка!
    // Устанавливаем состояние
    this.setState({ hasError: true });
    // Также можно отправить отчет об ошибке вашему аналитическому сервису
    // logErrorToMyService(error, info);
  }

  render() {
    // Если есть ошибка...
    if (this.state.hasError) {
      // Рендерим fallback UI
      return (
        <>
          <h1>Something went wrong, please try again later :(</h1>
          <img src={image} alt="error" />
        </>
      );
    }

    // Если все ок, рендерим детей
    return this.props.children;
  }
}

export default ErrorBoundary;
