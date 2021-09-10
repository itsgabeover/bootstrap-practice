import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Button, Alert,  Card, Carousel} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Carousel>
          <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://www.treehugger.com/thmb/ivHCxuw6Q7_SltmuLgo4-3IlSRc=/774x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2017__07__rosy-maple-moth-0b73ad59494f42eab6335c7142257c8b.jpg"
                  alt="Rosy Maple Moth"
                />
          <Carousel.Caption>
            <h3 class="d-block p-2 bg-dark text-white">Rosy Maple Moth</h3>
            <p class="d-block p-2 bg-dark text-white fs-6 text">10/10 super cute looks like a Peep candy</p>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEg8PEA8PDxAPDw8PDw8QDQ8PEBAPFRUWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLi0BCgoKDg0OFxAQFysfIB8rLSsrLSstLSstKysrLSstLS0rKy0tLS0rLS03LS0tKy0tLSsrLTc3Ny0tKysrKysrK//AABEIAMIBBAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwEEBQAGB//EADYQAAIBAwMCBAQEBgIDAQAAAAABAgMEEQUhMRJBBlFhgRMicZEUMkKhUmJyscHRIzNTkvAH/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAgEQEBAAICAwEAAwAAAAAAAAAAAQIRAyESMUFRImFx/9oADAMBAAIRAxEAPwDbtDWoIyrQ1qJhTmImOkImBCCQKCRRzBkEwGAEgGHIBgchsBSGwIH0xyEwGoKGoJHVGJRYgskMkGQCahSrFyqU6wFePJo2yM6PJo2xBepjBVMawFVGVplioV5gdEYgIhlEMFhMgDkDIIGYGXcfmZB1blnAOtDWomRaGvRIGSEyHSEyAhEoglFHMFhgSAXIBhyAYHIbAUhsCCxTHITAcgF1BQ2oKRYCREiURIBFUpVi7UKVYCvDk0bcz4cmhbkF2mNF0xjATUK8yxUK8iiYhAwDAghkkMCAJsYLqAZVblnHVeWcBYtDWomRZmvRAZITIdIRIDiSESgOBkEBIAJC2GwAJiNiKQ2BBYgNiKpjUAExSQyYtFgIGQQMgE1SlWLdVlOqAmHJpW5nQ5NG3ILlMYwKYbATUK8ixUK8iiYhoCIYEMg5gsAhVXgPIFXhgZc+TgpcnANsuxsUTHszXogHMTIdMTIDkECggIYDDYLAXIWHIFIDojoE0rWpLdQk19B6sqi5X7ogimNQEYNcpr2DQC6gtDKgtFgkiQcItvCWX5IOtbdCzVnCkv5pLP2FFCqVKpcrXFthv8QtuX0SwvX6brcpV5w5jOM15rP+ibi6pdPk0aBnUZJ7pp/RmjQCLlMYxdMNgJqMRIdUESKCiEDEIAZAhSAYHA1nsEhdw9gM9nHHAOsjXomRZmvRAZISxkxYEBpFilp1WWPlx9di9S05x5cV65M5XXprHGX2zY28n2+4X4GXmjXVou80/og1YxfNRv2RztzdZOOPK6tU/DdLdGvWg89U6MIyjT/qSfV7pMyrXxZSzL4VS3hJJ4659Tzh56s4axy1jyXL2+gfh6K5k/d7GffaNptX561vQqS46p04uT+r57k7+0/j8jyN3rE6mU66lKTSVNVowUUlldfS1j+Kb7JqK3Zk1atTLl11FGmsRk3NNr83XJLltvOOycI8vb0N/wCCtGqttUp0s/mdKtJJ+nS21g87qXgyFPDtNQrRaeVGt82+c/mXqk+Oy8jN/wBammna+K61v0wqv4scOL62urK5xLjbh+bzjZHqdMuYXcVUpfLnmMtmvM+aw0y9WVW/C1YJYT65KXTnOM445Xu+7N3w7qKsoylUklCnmUmnt2+bjyS7clxzrOWEe2qaVU9PuJpadUb6cY9e2PM0dE1uhd0o1qM1OL9mn3TXZidZ1qFvHMmsSl0LzcnwkdfJy0o6tqdOzg4w3qNJOSWZLPDf2e3fDPDajUq3HT8XlZnCrDLTj2nTx7ZXftiWzr6lc3VW5m40KSpTSzUlV6VJPnqis9kk8eSezPQ6PToU8fGarNS6kpJfDhLzUXy+Mt84zycrd+3STXplUbW4qpRpW9Wo4/lqrEKSb3TU3jMX3SzzlJbo0rPwjdNqVWajlY+FSfRBJ4ypPl7rhYXzPzPVw1KpPPRByXmtl9xN3XulF9KhnsvixNSRm7UaXh5wxmdOC8kPdgocVYS9M4Z5XUNVu02px6Ws7Zf3M1Xc5vqc2mu2cGrn/SeD30YtckyMjw9fyrQfVu4vGfM12zUu2bNEVBDHVBDNIKIQCCAhgslggShNzwOE3PAFJI4NHAdZGxSZjWbNiiA+EHJ4Xu/JeZNbVqVDMaS6pcObWXkrXtzKnSk4/me2fQ89G6TwlnPdvzOOeeunXjw33WtX8QVe9RpN+QE9bm/1t+u+TPUIcyeX6hx34WPqjluu2p+NChf1ZvZy3xhLdtmo7W4S6p1Y0Y7N9Ty/sUqLjYwUn81xUXd7QXkYF7f1qknKU+pNv5XwkX17TW/T0tWvQ5lcVZ+kYJf3KlzXt3lqrWX1ipI8vcajKKe2fRMStQb/AES+xNr4ti+m1vTqqa9Wov7GS7yecP23QTk3u4r3K7jBy25+uyJY0u0HKo++PQ1NS8KyrWdaEGlOcYuOfR5Rb8P2GVFtc9z11JJYisbf2Nyacsq+Tf8A5za3ljK4jWj0Um089SaU08Z5zuv7Gh4lpXGoV7WhReKcZfEnN+jzhHt9WsIVXjOONl8rfminpemfBn8RrK3xnbHt5f6Nbu2dTTyXiOxnbSjnqScVv2fn7mRQ1Fwae2f5tz6dr6hVoTUkm1FuLxun299j5POCT4X2JZ9WX40rnxPXkun4slH+GL6V+xRlqU//ACS9pMqVEn3QEkuM/RLuFbtjVrXUUnJvpk11vyNq20Gm95yk39hWiWvwqcY93vL6s3KCOmOP65XL8WLG2hSiowWF/cssCmHI2wRVK7H1BDKCiEwEE2ALBbCYtsA0JueByK9ywK6Zx0SAOszdtKLljy8zM0qxlPEmsR833+h6SlDCS7HLPPXUdcOPfdVr7phTeYdaXbB5G9v6TePhuPu+T2l03h4WTzep28J8xw/RHmy3XswkkYf42K+aO67+jL2l3HXUhtt1Jv23PParbSovrg9u6fDXqL8OanGVaMfmjLMsw3xxzkY3vSZY/jf1a4lUqzfXhL5ezMurPtmUvd4G3FXM543afPl6FarJvZtLPlybYgKny8uMd87Dad1Htl+pWcEt3u+yGwjnd7ei4IHdUpZXC7eZWt60HUcI79LxKXqRfXapxwvzPaK/yWPClt/yQ+Tr5k08/dj6fNvo+i0o06UZS2fSu+ArjUEpNLbjfs0+5ialqEpbrZRWOnhYMCOvKLmp52xj27GvJnw329ddVf1xllx39dgtJvnWUkk28L29GI8KVI3EZSmnlvhx6X0+Sz2NTTrelb1anRHpU5OT3e7KzZrpn6rq0KVNQlHEnNJxff1Map4PjdT+J1ShGW/TBJPf1f8Ao1tQ02FzcKpBpwhHqe+0n6euzNCeqRpx6Y4XZl1WpjNdPNaj4KtYRcYTnCpjZykqkW/5lj+x53StJkpt1IpfDk1jzkj0WsaqopvP7irep1whP+JZLh3WOWeMMpmhblCmX7c7POuwCkDAmZRXqMSxsxLAJBERJYAsWG2CgJTEXJZwV7kBETiYnAepppFiEcrP2RVyNpzPG9qve9STaX1wY1av9nzsb9T7e5R1LT1OLlHCml7SJW5k8D4iqJ/LH12PLWdT4dxTnxh8/saeuVpKtJNOLWzT7GNXeZL3Oe+22863zTy9m8hRq9ll47mFTvsNwlzFrD7NeTNCN6v/AJ7HSVzsXY85fP7A3V5Gkt92/wAsVyyxo9L8RNRin0recuy9PqeooaVRhuqacv4pLLOuOFrllnMbp4GhZ3FeXxJU5JLdtrCSR6bw7W+Epy88I1tcn0UJdKzKo/hwjFZbb9EJ0DwvNpSuG4R5VJP5n/U+305M2TGtS3OGUYzr/wDWs+cv0x9y9pvhulSl8Sp/y1OfmXyx+kf8s3KNvGCUYxUYrhJYSArTxvnnkxXXGaDNxeGtnHhx2x6GRqeo1anxqaXwummumtFtS6sc4/b2H3FyoJ8ZzjH+TNrXq3y0hKlxlRptyqVOLTeWvmzy3nl+pj6triUpYYGoX6xhNIp2kouSjTpKrWlxtnp9X5fU1unU7VHGvc1IRw0pvbPl3ePI9pGmoRjFcRSivogNP0/4Scpvrqy/NLsl/DH0G1Dvx4eMeXl5POugX7cz6bNC3NuK7EiZ0DplFeoKGTYoAkSwUc2AMmciGQAxMr3I5Fa5YAROJhwcB6WLwGgKY08b2ChhgVabXv3TDSJjsFlec8R+HqV6k/8AqrRWI1Esp/yyXdHzHWdFuLOeK0MR4jUj81OX0l5+h9xaX8Cf7Ca9rCpF0504yhLZweJRf3M3FvyfA61s8dXnyTp1CdaUacFmUnhenqfWKngqzy8fGSf6VUXSvRZWSxpHhK2tW5U4yTfLlNzePLL4JMe+y59dKGj6dG3pqmt5cyfmzWoWM5duleb/ANGtTtlH8sUvXuG8rud/P8eecW7u1WoWUIYeOpriT3a+nkMl9g51UijcXXJiu0FWuEjLvLvCe/v5Cb2+Sy8nlNV1zGVF/wCTNbXdRv3HOy+u/B5261ScOXnq32e6+ou1oXV3LFJS6e7z0wX1b4PW6R4Qo08Tr/8APU5w8/DT+n6vf7Fx47WM+WYvN6Ro9zetTeadLO9SXdeUV3PdabpdK2j0047v803vKT9X/g0FhbeXCS2QuZ6ccJi8ufJciahVqFmoytUNuaKZo26M+kaNuQW4A1AogVCivNi2HMWASIkcRJgCzkccgJyVK73LTKlbkA6fBx1PgkD0NFlhMq09hyPI9hqYSAiw0wgsAyRPWDkK5kxBSyTJ43IqxGSKt5UjHuVa99jgxtQvmVdLF3e+pi3+qqKbbMfUtXxlZMCpWncTVOCcnJ4WwFu81GrXkqdNOTk8JLdtm/ovg1LFS6fXLn4Sfyr+p9/ojV8P6JTtY8KVWS+eeP2XobKO2PHJ7efPlt6hCpxglGKUYriMUkl7HI6oyInVxEDIICQCKhWmWahWmB1Lk0rczqRpUCC0hdQNC5lCJsWHMDAEgskhgQciGSgCZTrLctsq1eQJhwSRDgkD0EUNihdJjkeN7UpBIg5MIknBKF1qmOAopVFEoXFfq9EdVqZKFzVxkKTe3SijyOsazjKRo6rWk09snidRb6t+pb90wAq1JVZbZbbxjvlnvfC2hK2j8SazWkv/AEXl9fMzPBelRx+IliTTcYLHD2zI9hE74Ya7cOTk30dBh5FRYw6uBdRkRImcgDFzDAkAmZWmWZleaAmiaVBGfRNGiA8VMaJqMBLBYTIAghhMWwIZKBZMQJZUq8ltlOryAcHscdDg4D0MB8CvFjoM8b2mnA9QurUC6TUrYKs6rBqVCtO4KiatV9ilWmTWrGZeXqjnf7kQi/rpZef3PM1a061SNPMWpSUc4XdjNW1NSylhoseDrTqqOq1lQW2363x/k1hN1nK6j2FpQjShGnFYUVj6+pYixeQ4npeY6LGZEwYwBU2TEGRMSoMGQQEgFyK8yzIrzAKiaNEzqBo0WRTmIqDpMTMqFMnBxOAAkAxrQqSABhIho6IEsp1OS4ylU5AZDg46JwG6uxY7I448b3AkJqdzjiKp3RSkzjioqXL2MK8k8Pd/cg4I8ndfnf1PceD1/wAD/rf9kccduJy5fTeQyJxx1cDIDCTgEyJiccVBgSOOACRXqHHEUVDk0KRxwDZCZHHFERJRxwAyFyOOCAZyOOA5lKfJxwBxOOOA/9k="
              alt="Poodle Moth"
            />
          <Carousel.Caption>
            <h3 class="d-block p-2 bg-dark text-white">Poodle Moth</h3>
            <p class="d-block p-2 bg-dark text-white fs-6 text">7/10 cute name and fuzzy white coat, but has the eyes of satan</p>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.treehugger.com/thmb/b0sXTTEBokv9GHQ0wDufnKWa2r4=/774x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/garden-tiger-moth--arctia-caja--wings-open--scotland-123532726-5a949ab03de4230037660db0.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 class="d-block p-2 bg-dark text-white">Garden Tiger Moth</h3>
              <p class="d-block p-2 bg-dark text-white fs-6 text">8/10 would be cuter if they named it the cow moth</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Card className ="mb-3" style={{ color: "#000" }}>
          <Card.Body>
            <Card.Title>
              Card Example
            </Card.Title>
            <Card.Text>
              This is an example of react bootstrap cards
            </Card.Text>
          </Card.Body>
        </Card>
        <Alert variant="success">This is an alert</Alert>
        <Button>Test Button</Button>
      </header>
    </div>
  );
}


export default App;
