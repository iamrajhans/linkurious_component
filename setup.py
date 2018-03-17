from setuptools import setup

exec (open('linkurious_component/version.py').read())

setup(
    name='linkurious_component',
    version=__version__,
    author='iamrajhans',
    packages=['linkurious_component'],
    include_package_data=True,
    license='MIT',
    description='Component to load the data from linkurious lib',
    install_requires=[]
)
